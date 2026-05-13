/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Search, 
  ClipboardCheck, 
  AlertTriangle, 
  MessageSquare,
  ChevronRight,
  LayoutDashboard,
  Filter,
  BarChart3,
  Scale,
  Building2,
  Wallet,
  CreditCard,
  TrendingUp,
  ShieldCheck,
  MoreVertical,
  PlusCircle,
  FileText,
  Info,
  RotateCcw
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CATEGORIES, INITIAL_CHECKLIST } from './constants';
import { ChecklistItem } from './types';

// Helper to map icon names to components
const IconMap: Record<string, any> = {
  Wallet,
  Building2,
  CreditCard,
  Scale,
  TrendingUp,
  ShieldCheck,
  BarChart3,
};

export default function App() {
  const [items, setItems] = useState<ChecklistItem[]>(() => {
    const saved = localStorage.getItem('audit_checklist');
    return saved ? JSON.parse(saved) : INITIAL_CHECKLIST;
  });
  
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [view, setView] = useState<'checklist' | 'dashboard'>('checklist');

  useEffect(() => {
    localStorage.setItem('audit_checklist', JSON.stringify(items));
  }, [items]);

  const toggleItem = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    ));
  };

  const updateNotes = (id: string, notes: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, notes } : item
    ));
  };

  const stats = useMemo(() => {
    const total = items.length;
    const completed = items.filter(i => i.isCompleted).length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    const byCategory = CATEGORIES.map(cat => {
      const catItems = items.filter(i => i.category === cat.id);
      const catComp = catItems.filter(i => i.isCompleted).length;
      return {
        ...cat,
        total: catItems.length,
        completed: catComp,
        percent: catItems.length > 0 ? Math.round((catComp / catItems.length) * 100) : 0
      };
    });

    return { total, completed, percentage, byCategory };
  }, [items]);

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesSearch = item.task.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory ? item.category === activeCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [items, searchTerm, activeCategory]);

  const resetChecklist = () => {
    if (confirm('Deseja resetar o checklist para os itens padrão? Isso irá apagar suas marcações atuais.')) {
      setItems(INITIAL_CHECKLIST);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-200">
            <ClipboardCheck size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-800">AuditCheck</h1>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Conciliação de Balancete</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => setView('checklist')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${view === 'checklist' ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            <Filter size={18} />
            Checklist
          </button>
          <button 
            onClick={() => setView('dashboard')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${view === 'dashboard' ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            <LayoutDashboard size={18} />
            Dashboard
          </button>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden">
        {/* Sidebar / Categories */}
        <aside className="w-72 bg-white border-r border-slate-200 hidden md:flex flex-col">
          <div className="p-6">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-slate-700">Progresso Geral</span>
                <span className="text-sm font-bold text-brand-600">{stats.percentage}%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${stats.percentage}%` }}
                  className="h-full bg-brand-500" 
                />
              </div>
            </div>

            <nav className="space-y-1">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 px-2">Categorias</p>
              <button
                onClick={() => setActiveCategory(null)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all ${!activeCategory ? 'bg-brand-50 text-brand-700 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <div className="flex items-center gap-3">
                  <BarChart3 size={18} />
                  <span>Todos os Pontos</span>
                </div>
                <span className="text-xs bg-slate-100 px-2 py-0.5 rounded-full text-slate-500">{items.length}</span>
              </button>
              
              {stats.byCategory.map(cat => {
                const Icon = IconMap[cat.iconName] || FileText;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all ${activeCategory === cat.id ? 'bg-brand-50 text-brand-700 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={18} />
                      <span>{cat.name}</span>
                    </div>
                    <span className="text-xs bg-slate-100 px-2 py-0.5 rounded-full text-slate-500">
                      {cat.completed}/{cat.total}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
          
          <div className="mt-auto p-6 border-t border-slate-100 space-y-3">
            <button 
              onClick={resetChecklist}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-lg text-xs font-medium transition-all"
            >
              <RotateCcw size={14} />
              Resetar para Padrão
            </button>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-medium transition-all shadow-md">
              <PlusCircle size={18} />
              Adicionar Ponto Custom
            </button>
          </div>
        </aside>

        {/* Content Area */}
        <section className="flex-1 overflow-y-auto bg-slate-50 custom-scrollbar p-6">
          <div className="max-w-4xl mx-auto">
            {view === 'checklist' ? (
              <div className="space-y-6">
                {/* Search and Filters */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
                  <div className="relative w-full sm:max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      type="text" 
                      placeholder="Pesquisar ponto de auditoria..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all shadow-sm"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-sm">
                    <AlertTriangle size={16} className="text-amber-500" />
                    <span>{items.filter(i => !i.isCompleted && i.severity === 'high').length} pontos críticos restantes</span>
                  </div>
                </div>

                {/* Items List */}
                <div className="space-y-4">
                  <AnimatePresence mode="popLayout">
                    {filteredItems.map((item) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        key={item.id}
                        className={`group bg-white border rounded-2xl p-5 shadow-sm transition-all hover:shadow-md ${item.isCompleted ? 'border-brand-200 bg-white' : 'border-slate-200'}`}
                      >
                        <div className="flex gap-4">
                          <button 
                            onClick={() => toggleItem(item.id)}
                            className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${item.isCompleted ? 'bg-brand-500 text-white ring-4 ring-brand-50' : 'bg-slate-50 text-slate-300 ring-4 ring-transparent hover:text-brand-500 hover:bg-brand-50'}`}
                          >
                            {item.isCompleted ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                          </button>
                          
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                              <h3 className={`font-semibold text-lg transition-all ${item.isCompleted ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
                                {item.task}
                              </h3>
                              <div className="flex items-center gap-2">
                                <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                                  item.severity === 'high' ? 'bg-red-50 text-red-600 border border-red-100' :
                                  item.severity === 'medium' ? 'bg-amber-50 text-amber-600 border border-amber-100' :
                                  'bg-blue-50 text-blue-600 border border-blue-100'
                                }`}>
                                  {item.severity}
                                </span>
                                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-500 border border-slate-200">
                                  {CATEGORIES.find(c => c.id === item.category)?.name}
                                </span>
                              </div>
                            </div>
                            
                            <p className={`text-sm mb-4 leading-relaxed ${item.isCompleted ? 'text-slate-400' : 'text-slate-600'}`}>
                              {item.description}
                            </p>

                            <div className="flex flex-col gap-3">
                              <div className="relative group/notes">
                                <MessageSquare size={14} className="absolute left-3 top-2.5 text-slate-400 group-focus-within/notes:text-brand-500 transition-colors" />
                                <textarea
                                  placeholder="Adicionar observações de reconciliação..."
                                  value={item.notes}
                                  onChange={(e) => updateNotes(item.id, e.target.value)}
                                  className="w-full min-h-[60px] pl-9 pr-3 py-2 text-sm bg-slate-50 hover:bg-slate-100 focus:bg-white border-transparent focus:border-brand-200 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-brand-500/10 resize-none overflow-hidden"
                                  rows={1}
                                  onInput={(e) => {
                                    const target = e.target as HTMLTextAreaElement;
                                    target.style.height = 'auto';
                                    target.style.height = `${target.scrollHeight}px`;
                                  }}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col gap-1 items-end opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-all">
                              <MoreVertical size={18} />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  
                  {filteredItems.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                      <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                        <Search size={32} />
                      </div>
                      <p className="text-lg font-medium">Nenhum ponto encontrado</p>
                      <p className="text-sm">Tente ajustar sua busca ou categoria</p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <p className="text-sm font-medium text-slate-500 mb-1">Total de Pontos</p>
                    <h3 className="text-3xl font-bold text-slate-800">{stats.total}</h3>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <p className="text-sm font-medium text-slate-500 mb-1">Concluídos</p>
                    <h3 className="text-3xl font-bold text-brand-600">{stats.completed}</h3>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <p className="text-sm font-medium text-slate-500 mb-1">Pendentes</p>
                    <h3 className="text-3xl font-bold text-amber-500">{stats.total - stats.completed}</h3>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <BarChart3 size={20} className="text-brand-500" />
                    Status por Categoria
                  </h3>
                  
                  <div className="space-y-6">
                    {stats.byCategory.map(cat => (
                      <div key={cat.id} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-semibold text-slate-700">{cat.name}</span>
                          <span className="text-slate-500">{cat.percent}% ({cat.completed}/{cat.total})</span>
                        </div>
                        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${cat.percent}%` }}
                            className={`h-full ${cat.percent === 100 ? 'bg-emerald-500' : 'bg-brand-500'}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-brand-900 p-8 rounded-3xl text-white shadow-xl shadow-brand-200 flex flex-col sm:flex-row items-center gap-8">
                   <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">Relatório de Reconciliação</h3>
                      <p className="text-brand-200 mb-6 leading-relaxed">
                        Exporte seu balanço de auditoria completo para PDF ou Excel, incluindo todas as observações e status de cada ponto de verificação.
                      </p>
                      <button className="flex items-center gap-2 px-6 py-3 bg-white text-brand-900 rounded-xl font-bold hover:bg-brand-50 transition-all">
                        <FileText size={18} />
                        Gerar Relatório Completo
                      </button>
                   </div>
                   <div className="shrink-0 relative">
                      <div className="w-32 h-32 rounded-full border-8 border-brand-800 flex items-center justify-center">
                        <span className="text-3xl font-bold">{stats.percentage}%</span>
                      </div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-emerald-500 text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap">
                        CONCILIADO
                      </div>
                   </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      
      {/* Footer Info */}
      <footer className="bg-white border-t border-slate-200 px-6 py-3 flex items-center justify-between text-[11px] text-slate-400 font-medium">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Info size={12} />
            Último backup salvo localmente
          </span>
          <span className="flex items-center gap-1 uppercase tracking-tighter">
            v1.0.4-audit
          </span>
        </div>
        <div className="flex items-center gap-1">
          Criado para Auditoria Contábil Profissional
        </div>
      </footer>
    </div>
  );
}

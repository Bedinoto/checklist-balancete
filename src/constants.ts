import { ChecklistItem, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'assets_curr', name: 'Ativo Circulante', iconName: 'Wallet' },
  { id: 'assets_non_curr', name: 'Ativo Não Circulante', iconName: 'Building2' },
  { id: 'liabilities', name: 'Passivo', iconName: 'CreditCard' },
  { id: 'equity', name: 'Patrimônio Líquido', iconName: 'Scale' },
  { id: 'results', name: 'Resultados (DRE)', iconName: 'TrendingUp' },
  { id: 'compliance', name: 'Conformidade e Tributos', iconName: 'ShieldCheck' },
];

export const INITIAL_CHECKLIST: ChecklistItem[] = [
  // Ativo Circulante
  {
    id: 'c1',
    category: 'assets_curr',
    task: 'Reconciliação Bancária',
    description: 'Bater o saldo contábil com o extrato bancário. Verificar depósitos/pagamentos não identificados.',
    isCompleted: false,
    notes: '',
    severity: 'high'
  },
  {
    id: 'c2',
    category: 'assets_curr',
    task: 'Caixa Físico',
    description: 'Realizar contagem física do numerário e confrontar com o saldo do Razão.',
    isCompleted: false,
    notes: '',
    severity: 'medium'
  },
  {
    id: 'c3',
    category: 'assets_curr',
    task: 'Contas a Receber (Clientes)',
    description: 'Validar se o somatório do relatório de clientes bate com o saldo contábil. Checar inadimplência.',
    isCompleted: false,
    notes: '',
    severity: 'high'
  },
  {
    id: 'c4',
    category: 'assets_curr',
    task: 'Estoques',
    description: 'Validar inventário físico vs contábil. Checar se há produtos obsoletos sem provisão.',
    isCompleted: false,
    notes: '',
    severity: 'high'
  },
  
  // Ativo Não Circulante
  {
    id: 'anc1',
    category: 'assets_non_curr',
    task: 'Imobilizado - Aquisições',
    description: 'Verificar notas fiscais de novas compras e se foram classificadas corretamente.',
    isCompleted: false,
    notes: '',
    severity: 'medium'
  },
  {
    id: 'anc2',
    category: 'assets_non_curr',
    task: 'Depreciação',
    description: 'Garantir que as taxas de depreciação estão de acordo com a vida útil econômica.',
    isCompleted: false,
    notes: '',
    severity: 'medium'
  },

  // Passivo
  {
    id: 'p1',
    category: 'liabilities',
    task: 'Fornecedores',
    description: 'Circularização ou validação de notas fiscais em aberto vs contas a pagar.',
    isCompleted: false,
    notes: '',
    severity: 'high'
  },
  {
    id: 'p2',
    category: 'liabilities',
    task: 'Empréstimos e Financiamentos',
    description: 'Validar cronograma de pagamentos e juros apropriados mensalmente.',
    isCompleted: false,
    notes: '',
    severity: 'high'
  },
  {
    id: 'p3',
    category: 'liabilities',
    task: 'Provisões Trabalhistas',
    description: 'Conferir saldo de Férias e 13º Salário a pagar vs folha de pagamento.',
    isCompleted: false,
    notes: '',
    severity: 'medium'
  },

  // Patrimônio Líquido
  {
    id: 'pl1',
    category: 'equity',
    task: 'Capital Social',
    description: 'Validar se o valor bate com o Contrato Social/Alterações vigentes.',
    isCompleted: false,
    notes: '',
    severity: 'low'
  },
  {
    id: 'pl2',
    category: 'equity',
    task: 'Lucros/Prejuízos Acumulados',
    description: 'Verificar se as distribuições de dividendos foram registradas corretamente.',
    isCompleted: false,
    notes: '',
    severity: 'medium'
  },

  // Resultados
  {
    id: 'r1',
    category: 'results',
    task: 'Regime de Competência',
    description: 'Garantir que despesas pagas antecipadamente foram apropriadas corretamente.',
    isCompleted: false,
    notes: '',
    severity: 'high'
  },
  {
    id: 'r2',
    category: 'results',
    task: 'Receitas de Vendas',
    description: 'Confrontar faturamento do mês (Notas Fiscais Emitidas) com a receita contábil.',
    isCompleted: false,
    notes: '',
    severity: 'high'
  },

  // Conformidade
  {
    id: 't1',
    category: 'compliance',
    task: 'Impostos Diretos e Indiretos',
    description: 'Recalcular impostos (PIS, COFINS, ICMS, IRPJ, CSLL) e bater com as guias (DARF/GARE).',
    isCompleted: false,
    notes: '',
    severity: 'high'
  },
  {
    id: 't2',
    category: 'compliance',
    task: 'Obrigações Acessórias',
    description: 'Verificar envio de SPED, DCTF e outras declarações pertinentes ao período.',
    isCompleted: false,
    notes: '',
    severity: 'medium'
  },
];

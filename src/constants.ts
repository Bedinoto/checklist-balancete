import { ChecklistItem, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'cash', name: '1. Caixa e Bancos', iconName: 'Wallet' },
  { id: 'receivables', name: '2. Contas a Receber', iconName: 'TrendingUp' },
  { id: 'payables', name: '3. Contas a Pagar', iconName: 'CreditCard' },
  { id: 'inventory', name: '4. Estoque', iconName: 'Building2' },
  { id: 'fixed_assets', name: '5. Ativo Imobilizado', iconName: 'Building2' },
  { id: 'loans', name: '6. Empréstimos', iconName: 'Scale' },
  { id: 'payroll', name: '7. Folha de Pagamento', iconName: 'ShieldCheck' },
  { id: 'taxes', name: '8. Tributos', iconName: 'ShieldCheck' },
  { id: 'income', name: '9. Receitas', iconName: 'TrendingUp' },
  { id: 'expenses', name: '10. Despesas e Custos', iconName: 'TrendingUp' },
  { id: 'equity', name: '11. Patrimônio Líquido', iconName: 'Scale' },
  { id: 'closing', name: '12. Testes de Fechamento', iconName: 'BarChart3' },
];

export const INITIAL_CHECKLIST: ChecklistItem[] = [
  // 1. Caixa e Bancos
  { id: 'cb1', category: 'cash', task: 'Saldo do Caixa Físico', description: 'Conferir saldo do caixa físico com a contagem real.', isCompleted: false, notes: '', severity: 'medium' },
  { id: 'cb2', category: 'cash', task: 'Conciliação Bancária', description: 'Conciliar extratos bancários com o razão contábil.', isCompleted: false, notes: '', severity: 'high' },
  { id: 'cb3', category: 'cash', task: 'Cheques Pendentes', description: 'Verificar cheques pendentes de compensação.', isCompleted: false, notes: '', severity: 'medium' },
  { id: 'cb4', category: 'cash', task: 'Tarifas e Juros', description: 'Conferir tarifas, juros e IOF lançados no período.', isCompleted: false, notes: '', severity: 'low' },
  { id: 'cb5', category: 'cash', task: 'Aplicações Financeiras', description: 'Validar saldo e rendimentos das aplicações financeiras.', isCompleted: false, notes: '', severity: 'medium' },

  // 2. Contas a Receber
  { id: 'cr1', category: 'receivables', task: 'Saldo de Clientes', description: 'Conferir saldo total de clientes em aberto.', isCompleted: false, notes: '', severity: 'high' },
  { id: 'cr2', category: 'receivables', task: 'Títulos Vencidos', description: 'Validar títulos vencidos e aging da carteira.', isCompleted: false, notes: '', severity: 'medium' },
  { id: 'cr3', category: 'receivables', task: 'Provisão PECLD', description: 'Conferir provisão para inadimplência (devedores duvidosos).', isCompleted: false, notes: '', severity: 'medium' },
  { id: 'cr4', category: 'receivables', task: 'Financeiro x Contabilidade', description: 'Comparar relatórios financeiros com a contabilidade.', isCompleted: false, notes: '', severity: 'high' },
  { id: 'cr5', category: 'receivables', task: 'Adiantamentos de Clientes', description: 'Revisar saldos de adiantamentos de clientes.', isCompleted: false, notes: '', severity: 'low' },

  // 3. Contas a Pagar
  { id: 'cp1', category: 'payables', task: 'Fornecedores em Aberto', description: 'Conferir saldo de fornecedores no balancete.', isCompleted: false, notes: '', severity: 'high' },
  { id: 'cp2', category: 'payables', task: 'Lançamentos Duplicados', description: 'Validar possíveis duplicidades de lançamento.', isCompleted: false, notes: '', severity: 'medium' },
  { id: 'cp3', category: 'payables', task: 'Impostos e Retenções', description: 'Conferir impostos retidos na fonte em notas de serviço.', isCompleted: false, notes: '', severity: 'high' },
  { id: 'cp4', category: 'payables', task: 'Adiantamentos Fornecedores', description: 'Revisar adiantamentos feitos a fornecedores.', isCompleted: false, notes: '', severity: 'low' },
  { id: 'cp5', category: 'payables', task: 'Vencimentos Futuros', description: 'Validar fluxo de vencimentos futuros.', isCompleted: false, notes: '', severity: 'low' },

  // 4. Estoque
  { id: 'st1', category: 'inventory', task: 'Saldo Contábil x Sistema', description: 'Conferir saldo contábil com o relatório do sistema.', isCompleted: false, notes: '', severity: 'high' },
  { id: 'st2', category: 'inventory', task: 'Inventário Físico', description: 'Validar inventário físico contra o sistema.', isCompleted: false, notes: '', severity: 'high' },
  { id: 'st3', category: 'inventory', task: 'Custo Médio', description: 'Revisar custo médio e valorização dos produtos.', isCompleted: false, notes: '', severity: 'medium' },
  { id: 'st4', category: 'inventory', task: 'Mercadorias em Trânsito', description: 'Conferir mercadorias faturadas mas não recebidas.', isCompleted: false, notes: '', severity: 'medium' },
  { id: 'st5', category: 'inventory', task: 'Perdas e Ajustes', description: 'Verificar perdas, quebras e ajustes de inventário.', isCompleted: false, notes: '', severity: 'low' },

  // 5. Ativo Imobilizado
  { id: 'fa1', category: 'fixed_assets', task: 'Aquisição de Bens', description: 'Conferir novas aquisições de bens no período.', isCompleted: false, notes: '', severity: 'medium' },
  { id: 'fa2', category: 'fixed_assets', task: 'Cálculo de Depreciação', description: 'Validar o cálculo mensal da depreciação.', isCompleted: false, notes: '', severity: 'high' },
  { id: 'fa3', category: 'fixed_assets', task: 'Baixas e Vendas', description: 'Revisar baixas e vendas de ativos imobilizados.', isCompleted: false, notes: '', severity: 'medium' },
  { id: 'fa4', category: 'fixed_assets', task: 'Depreciação Acumulada', description: 'Conferir saldo acumulado da depreciação.', isCompleted: false, notes: '', severity: 'low' },

  // 6. Empréstimos e Financiamentos
  { id: 'ln1', category: 'loans', task: 'Contratos Bancários', description: 'Conferir saldos com os contratos e extratos bancários.', isCompleted: false, notes: '', severity: 'high' },
  { id: 'ln2', category: 'loans', task: 'Juros Apropriados', description: 'Validar a apropriação dos juros mensais.', isCompleted: false, notes: '', severity: 'high' },
  { id: 'ln3', category: 'loans', task: 'Parcelas a Vencer', description: 'Conferir parcelas pagas e saldo a vencer.', isCompleted: false, notes: '', severity: 'medium' },
  { id: 'ln4', category: 'loans', task: 'Curto x Longo Prazo', description: 'Revisar a classificação entre passivo circulante e não circulante.', isCompleted: false, notes: '', severity: 'medium' },

  // 7. Folha de Pagamento
  { id: 'pr1', category: 'payroll', task: 'Salários Contabilizados', description: 'Conferir salários e provisões com a folha de pagamento.', isCompleted: false, notes: '', severity: 'high' },
  { id: 'pr2', category: 'payroll', task: 'INSS e FGTS', description: 'Validar encargos de INSS, FGTS e retenções.', isCompleted: false, notes: '', severity: 'high' },
  { id: 'pr3', category: 'payroll', task: 'Férias e 13º Salário', description: 'Conferir provisões de férias e 13º salário.', isCompleted: false, notes: '', severity: 'medium' },
  { id: 'pr4', category: 'payroll', task: 'Encargos Sociais', description: 'Revisar o lançamento de todos os encargos sociais.', isCompleted: false, notes: '', severity: 'medium' },
  { id: 'pr5', category: 'payroll', task: 'Pró-labore', description: 'Validar o pagamento e encargos do pró-labore.', isCompleted: false, notes: '', severity: 'low' },

  // 8. Tributos
  { id: 'tx1', category: 'taxes', task: 'Apuração de Impostos', description: 'Conferir memória de cálculo da apuração de impostos.', isCompleted: false, notes: '', severity: 'high' },
  { id: 'tx2', category: 'taxes', task: 'Impostos a Recolher', description: 'Validar saldos de impostos a pagar no balancete.', isCompleted: false, notes: '', severity: 'high' },
  { id: 'tx3', category: 'taxes', task: 'Créditos Tributários', description: 'Revisar saldos de impostos a recuperar/compensar.', isCompleted: false, notes: '', severity: 'medium' },
  { id: 'tx4', category: 'taxes', task: 'Parcelamentos Fiscais', description: 'Conferir parcelas de impostos parcelados.', isCompleted: false, notes: '', severity: 'medium' },
  { id: 'tx5', category: 'taxes', task: 'Retenções Federais/Mun.', description: 'Validar retenções sofridas e efetuadas.', isCompleted: false, notes: '', severity: 'medium' },

  // 9. Receitas
  { id: 'rv1', category: 'income', task: 'Faturamento Emitido', description: 'Conferir faturamento fiscal com o contábil.', isCompleted: false, notes: '', severity: 'high' },
  { id: 'rv2', category: 'income', task: 'Competência das Receitas', description: 'Validar se as receitas estão no mês correto.', isCompleted: false, notes: '', severity: 'high' },
  { id: 'rv3', category: 'income', task: 'Cancelamentos/Devoluções', description: 'Revisar notas canceladas e devoluções de venda.', isCompleted: false, notes: '', severity: 'medium' },
  { id: 'rv4', category: 'income', task: 'Integrações Fiscais', description: 'Conferir se a integração fiscal está correta.', isCompleted: false, notes: '', severity: 'medium' },

  // 10. Despesas e Custos
  { id: 'ex1', category: 'expenses', task: 'Documento Suporte', description: 'Revisar despesas lançadas sem documento idôneo.', isCompleted: false, notes: '', severity: 'high' },
  { id: 'ex2', category: 'expenses', task: 'Rateios', description: 'Validar se os rateios de custos estão corretos.', isCompleted: false, notes: '', severity: 'medium' },
  { id: 'ex3', category: 'expenses', task: 'Despesas Antecipadas', description: 'Conferir apropriação de seguros e assinaturas.', isCompleted: false, notes: '', severity: 'medium' },
  { id: 'ex4', category: 'expenses', task: 'Competência', description: 'Identificar despesas pagas fora do mês de competência.', isCompleted: false, notes: '', severity: 'high' },
  { id: 'ex5', category: 'expenses', task: 'Centros de Custo', description: 'Revisar a classificação por centros de custo.', isCompleted: false, notes: '', severity: 'low' },

  // 11. Patrimônio Líquido
  { id: 'eq1', category: 'equity', task: 'Capital Social', description: 'Conferir capital social com o contrato social.', isCompleted: false, notes: '', severity: 'low' },
  { id: 'eq2', category: 'equity', task: 'Distribuição de Lucros', description: 'Validar se a distribuição seguiu as regras legais.', isCompleted: false, notes: '', severity: 'medium' },
  { id: 'eq3', category: 'equity', task: 'Reservas', description: 'Revisar reservas de lucros e legal.', isCompleted: false, notes: '', severity: 'low' },
  { id: 'eq4', category: 'equity', task: 'Resultado Acumulado', description: 'Conferir o saldo de lucros/prejuízos acumulados.', isCompleted: false, notes: '', severity: 'medium' },

  // 12. Testes Gerais
  { id: 'gt1', category: 'closing', task: 'Débito = Crédito', description: 'Conferir se o balancete está fechado (D=C).', isCompleted: false, notes: '', severity: 'high' },
  { id: 'gt2', category: 'closing', task: 'Contas Negativas', description: 'Validar contas com saldo invertido indevido.', isCompleted: false, notes: '', severity: 'high' },
  { id: 'gt3', category: 'closing', task: 'Sem Movimentação', description: 'Identificar contas que perderam movimentação.', isCompleted: false, notes: '', severity: 'low' },
  { id: 'gt4', category: 'closing', task: 'Padrão Histórico', description: 'Revisar saldos que fogem muito do padrão histórico.', isCompleted: false, notes: '', severity: 'medium' },
  { id: 'gt5', category: 'closing', task: 'Comparativo Mês Anterior', description: 'Comparar balancete atual com o mês anterior.', isCompleted: false, notes: '', severity: 'medium' },
  { id: 'gt6', category: 'closing', task: 'Integrações', description: 'Conferir integração Fiscal/Financeiro/Estoque.', isCompleted: false, notes: '', severity: 'high' },
  { id: 'gt7', category: 'closing', task: 'Plano de Contas', description: 'Validar a estrutura do plano de contas usado.', isCompleted: false, notes: '', severity: 'low' },
  { id: 'gt8', category: 'closing', task: 'Lançamentos Manuais', description: 'Revisar lançamentos feitos fora dos módulos.', isCompleted: false, notes: '', severity: 'high' },
];


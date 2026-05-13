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
  // Ativo Circulante (Disponibilidades)
  {
    id: 'c1',
    category: 'assets_curr',
    task: 'Extratos e Conciliação Bancária',
    description: 'Confrontar o saldo final com o extrato. Verificar se tarifas, rendimentos e transferências foram lançados.',
    isCompleted: false,
    notes: '',
    severity: 'high'
  },
  {
    id: 'c2',
    category: 'assets_curr',
    task: 'Pendenças: Cheques e Depósitos',
    description: 'Investigar depósitos não identificados ou cheques emitidos há muito tempo e não compensados.',
    isCompleted: false,
    notes: '',
    severity: 'medium'
  },
  {
    id: 'c3',
    category: 'assets_curr',
    task: 'Aplicações Financeiras',
    description: 'Validar se os rendimentos do mês foram apropriados e se o saldo bate com o informe da corretora/banco.',
    isCompleted: false,
    notes: '',
    severity: 'medium'
  },
  {
    id: 'c4',
    category: 'assets_curr',
    task: 'Contas a Receber (Razão vs Balancete)',
    description: 'O somatório do relatório de clientes deve ser exatamente igual ao saldo da conta "Clientes" no balancete.',
    isCompleted: false,
    notes: '',
    severity: 'high'
  },
  {
    id: 'c5',
    category: 'assets_curr',
    task: 'Aging e PECLD (Créditos Duvidosos)',
    description: 'Identificar faturas vencidas há muito tempo e avaliar necessidade de provisão para devedores duvidosos.',
    isCompleted: false,
    notes: '',
    severity: 'medium'
  },
  {
    id: 'c6',
    category: 'assets_curr',
    task: 'Testes de Baixas (Pix/Cartão)',
    description: 'Testar se os valores recebidos via Pix ou cartão foram devidamente baixados no financeiro e contábil.',
    isCompleted: false,
    notes: '',
    severity: 'high'
  },
  {
    id: 'c7',
    category: 'assets_curr',
    task: 'Estoques: Inventário e Custos',
    description: 'Comparar contagem física com saldo contábil. Validar se o CPV/CMV foi baixado sem deixar saldos negativos.',
    isCompleted: false,
    notes: '',
    severity: 'high'
  },
  {
    id: 'c8',
    category: 'assets_curr',
    task: 'Obsolescência de Estoque',
    description: 'Checar se existem itens parados ou danificados que precisam de ajuste de valor ou provisão.',
    isCompleted: false,
    notes: '',
    severity: 'low'
  },
  
  // Ativo Não Circulante
  {
    id: 'anc1',
    category: 'assets_non_curr',
    task: 'Imobilizado: Aquisições e Baixas',
    description: 'Verificar se novas compras foram ativadas e se itens vendidos/descartados foram baixados corretamente.',
    isCompleted: false,
    notes: '',
    severity: 'medium'
  },
  {
    id: 'anc2',
    category: 'assets_non_curr',
    task: 'Depreciação Mensal',
    description: 'Testar se a despesa de depreciação foi lançada conforme a vida útil econômica dos bens.',
    isCompleted: false,
    notes: '',
    severity: 'medium'
  },

  // Passivo
  {
    id: 'p1',
    category: 'liabilities',
    task: 'Fornecedores e Notas de Entrada',
    description: 'Validar se todas as notas de entrada foram registradas e se os pagamentos baixaram as obrigações corretas.',
    isCompleted: false,
    notes: '',
    severity: 'high'
  },
  {
    id: 'p2',
    category: 'liabilities',
    task: 'Empréstimos: Principal vs Juros',
    description: 'Conferir se as parcelas foram segregadas entre amortização do principal e despesas de juros.',
    isCompleted: false,
    notes: '',
    severity: 'high'
  },
  {
    id: 'p3',
    category: 'liabilities',
    task: 'Folha e Encargos (FGTS/INSS)',
    description: 'Cruzar o resumo da folha com os saldos de Salários a Pagar, FGTS e INSS no balancete.',
    isCompleted: false,
    notes: '',
    severity: 'high'
  },

  // Patrimônio Líquido
  {
    id: 'pl1',
    category: 'equity',
    task: 'Capital Social vs Contrato',
    description: 'Conferir se o saldo coincide com o Contrato Social ou Estatuto mais recente da empresa.',
    isCompleted: false,
    notes: '',
    severity: 'low'
  },
  {
    id: 'pl2',
    category: 'equity',
    task: 'Lucros/Prejuízos e Transferências',
    description: 'Validar se o resultado do exercício anterior foi devidamente transferido para as contas de reserva ou PL.',
    isCompleted: false,
    notes: '',
    severity: 'medium'
  },

  // Resultados e Conformidade
  {
    id: 'r1',
    category: 'results',
    task: 'Cruzamento Faturamento vs Impostos',
    description: 'Conciliar as guias de impostos (DAS, ICMS, PIS/COFINS, ISS) com o faturamento do período.',
    isCompleted: false,
    notes: '',
    severity: 'high'
  },
  {
    id: 't1',
    category: 'compliance',
    task: 'Obrigações Acessórias (SPED/DCTF)',
    description: 'Verificar se o envio das declarações obrigatórias foi realizado dentro do prazo do fechamento.',
    isCompleted: false,
    notes: '',
    severity: 'medium'
  },
];

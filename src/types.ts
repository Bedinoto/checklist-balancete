export interface ChecklistItem {
  id: string;
  task: string;
  description: string;
  isCompleted: boolean;
  notes: string;
  category: string;
  severity: 'low' | 'medium' | 'high';
}

export interface Category {
  id: string;
  name: string;
  iconName: string;
}

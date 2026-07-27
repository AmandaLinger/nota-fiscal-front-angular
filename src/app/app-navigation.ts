type NavigationItem = { path?: string, text: string, icon?: string, items?: NavigationItem[] };
export const navigation: NavigationItem[] = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Informações',
    icon: 'folder',
    items: [
      {
        text: 'Perfil',
        path: '/profile'
      },
      {
        text: 'Notas Fiscais',
        path: '/notas-fiscais'
      },
      {
        text: 'Produtos',
        path: '/produtos'
      }
    ]
  }
];


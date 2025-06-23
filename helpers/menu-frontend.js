
const getMenuFrontEnd = (role = 'USER_ROLE') => {

    const menu = [
        {
          titulo: 'Escritorio Médico',
          icono: 'mdi mdi-gauge',
          submenu: [
            { titulo: 'Main', url: '/' },
            { titulo: 'Calendario', url: 'calendario' },
            // { titulo: 'Gráficas', url: 'grafica1' },
            // { titulo: 'rxjs', url: 'rxjs' },
            // { titulo: 'Promesas', url: 'promesas' },
            // { titulo: 'ProgressBar', url: 'progress' },
          ]
        },
        {
          titulo: 'Mantenimientos',
          icono: 'mdi mdi-folder-lock-open',
          submenu: [
            // { titulo: 'Usuarios', url: 'usuarios' },
            { titulo: 'Hospitales', url: 'hospitales' },
            { titulo: 'Médicos', url: 'medicos' },
            { titulo: 'Agendas', url: 'agendas' },
            { titulo: 'Categorias', url: 'categorias' },
          ]
        },
       

      ];

    if ( role === 'ADMIN_ROLE' ) {
        menu[1].submenu.unshift({ titulo: 'Usuarios', url: 'usuarios' })
    }

    return menu;
}

module.exports = {
    getMenuFrontEnd
}

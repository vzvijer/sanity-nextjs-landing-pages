export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6192c7042963920d8b9707dd',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-h6rjwgis',
                  apiId: '6de0de29-bf52-47e2-9fa3-e340daeae7b3'
                },
                {
                  buildHookId: '6192c7042f68a0006e4754aa',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-q3kppj92',
                  apiId: '69342ab7-ad94-4c4e-a6f6-32ed93b18d98'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vzvijer/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-q3kppj92.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

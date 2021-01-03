export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5ff1d6f5dc7e581554feba57',
                  title: 'Sanity Studio',
                  name: 'artfly-portfolio-studio',
                  apiId: '5bc8e8c8-f458-4de8-83d0-e87209820280'
                },
                {
                  buildHookId: '5ff1d6f5fd243e2de5913b85',
                  title: 'Portfolio Website',
                  name: 'artfly-portfolio',
                  apiId: '9dba515a-d6f5-4468-8e33-557d9f7b5b3c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chrisdennett/Artfly-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://artfly-portfolio.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

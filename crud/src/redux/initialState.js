const initialState = {
    posts: [
        {
            id: '1',
            title: 'Cooking',
            shortDescription: 'Cooking dishes ...',
            content: 'Food',
            publishedDate: new Date('2022-02-02'),
            author: 'John Doe'
      },
      {
            id: '2',
            title: 'Listening',
            shortDescription: 'Listening to music ...',
            content: 'Music',
            publishedDate: new Date('2023-08-13'),
            author: 'David Copper'
      },
      {
            id: '3',
            title: 'Watching',
            shortDescription: 'Watching movies ...',
            content: 'Movies',
            publishedDate: new Date('2024-11-29'),
            author: 'Gustav Field'
      }
    ]
};

export default initialState;
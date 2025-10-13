const Stats = ({posts}) => {

    const stats = posts.reduce((auth, post) => {
        auth[post.author] = (auth[post.author] || 0) + 1;
        return auth;
    }, {});

    return (
        <>
            <h2>Estadísticas</h2> 
            <p>Cantidad de posts: {posts.length}</p>
            <p>Cantidad de posts por autor: </p>
            <ul>
                {Object.entries(stats).map(([author, count]) => (
                <li key={author}>
                    {author}: {count} post{count > 1 ? 's' : ''}
                </li>
                ))}
            </ul>
      </>
    )
}

export default Stats
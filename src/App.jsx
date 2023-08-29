const ProfileMapping = ({ profiles }) => {
  return (
    <>
      {(profiles.length == 0)
        ? <article key={profiles[0].name}>
            <header className="header-flex">
              <img src={profiles[0].img} alt={profiles[0].name} />
              <div className="flex-titles">
                <strong>{profiles[0].name}</strong>
                <span>{profiles[0].username}</span>
              </div>
            </header>
            <aside>
              <button className="follow-button button-follow">
                Seguir
              </button>
            </aside>
          </article>
        : profiles.map((profile) => (
          <article key={profile.id}>
            <header className="header-flex">
              <img src={profile.img} alt={profile.name} />
              <div className="flex-titles">
                <strong>{profile.name}</strong>
                <span>{profile.username}</span>
              </div>
            </header>
            <aside>
              <button className="follow-button button-follow">
                Seguir
              </button>
            </aside>
          </article>
        ))
      }
    </>
  );
};

function App() {
  const profiles = [
    {
      name: 'Fabrizzio Romano',
      username: '@fromano',
      img: 'https://pbs.twimg.com/profile_images/1486761402853380113/3ifAqala_400x400.jpg',
      id: 1,
    },
    {
      name: 'ᴀᴅʀɪᴀ́ɴ sᴀ́ɴᴄʜᴇᴢ',
      username: '@_AdrianSnchz',
      img: 'https://pbs.twimg.com/profile_images/1648712477067079681/H7GVRx7p_400x400.jpg',
      id: 2,
    },
  ];

  return (
    <>
      <ProfileMapping profiles={profiles} />
    </>
  );
}

export default App;

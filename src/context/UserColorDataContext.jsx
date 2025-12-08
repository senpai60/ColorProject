import { useContext, createContext, useReducer, useEffect } from "react";

const UserColorDataContext = createContext(null);

export const UserColorDataProvider = ({ children }) => {
  initialState = [
    {
      id: 1,
      playlistName: "liked",
      color: [],
    },
  ];

  const playlistReducer = (playlist, action) => {
    switch (action.type) {
      case "create_playlist":
        return [...prev, { id: playlist.length, playlistName: action.payload }];

      case "add_color":
        const { playlistId, colorCode } = action.payload;
        return playlist.map((p) => {
          if (p.id === playlistId) {
            return {
              ...p,
              color: [...p.color, colorCode],
            };
          }
          return p;
        });
      default:
        break;
    }
  };

  const [playlist, playlistDispatch] = useReducer(
    playlistReducer,
    initialState
  );

  //   save to local storage
  useEffect(() => {
    localStorage.setItem("playlist", JSON.stringify(playlist));
  }, [playlist]);

  // create a playlist and save in local storage=>
  const handlePlaylistCreation = (playlistName) => {
    playlistDispatch({
      type: "create_playlist",
      payload: playlistName,
    });
  };

  // add colors to the playlist=>
  const handleAddColorToPlaylist = (playlistId, colorCode) => {
    playlistDispatch({
      type: "add_color",
      payload: {
        playlistId,
        colorCode,
      },
    });
  };

  const value = {
    playlist,
    handlePlaylistCreation,
  };

  return (
    <UserColorDataContext.Provider value={value}>
      {children}
    </UserColorDataContext.Provider>
  );
};

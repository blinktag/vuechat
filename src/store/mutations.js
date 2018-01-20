export const setMyName = (state, name) => {
  state.user.name = name
}

export const addPeer = (state, { video, peer }) => {
  state.clients.push({ video, peer })
}

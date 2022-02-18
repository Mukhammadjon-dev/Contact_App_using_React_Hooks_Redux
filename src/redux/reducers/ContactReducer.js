const initialState = [
  {
    id: 0,
    name: "Nazarov Mukhammadjon",
    number: +998995456142,
    email: "muhammadjon.nazarov98@gmail.com",
  },
  {
    id: 1,
    name: "Rahimov Sherali",
    number: +998991002003,
    email: "rahimov@gmail.com",
  },
];
function ContactReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;

    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;
    case "DELETE_CONTACT":
      const filterContacts = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = filterContacts;
      return state;
    default:
      return state;
  }
}
export default ContactReducer;

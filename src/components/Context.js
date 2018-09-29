import createReactContext from "create-react-context";
const context = createReactContext({});

context.Provider.displayName = "Router.Provider";
context.Consumer.displayName = "Router.Consumer";

export default context;

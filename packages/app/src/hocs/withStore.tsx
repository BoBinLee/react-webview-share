import hoistNonReactStatic from "hoist-non-react-statics";
import { Provider } from "mobx-react/native";
import React from "react";

const withStore = (store: any) => <P extends object>(
  TargetComponent: React.ComponentType<P>
): any => {
  class WithStore extends React.PureComponent<P> {
    public render() {
      return (
        <Provider store={store}>
          <TargetComponent {...this.props} />
        </Provider>
      );
    }
  }
  hoistNonReactStatic(WithStore, TargetComponent as any);
  return WithStore;
};

export default withStore;

"use client";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/lib/integration/react";
import LoadingSpinner from "../components/LoadingSpinner";

function Layout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<LoadingSpinner />}>
        {children}
      </PersistGate>
    </Provider>
  );
}

export default Layout;

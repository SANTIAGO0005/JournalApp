import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoute } from "../auth/routes/AuthRoute";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { JournalRoute } from "../journal/routes/JournalRoute";
import { CheckingAuth } from "../ui/components/CheckingAuth";

export const AppRouter = () => {
  const { status } = useCheckAuth();

  if (status === "checking") {
    return <CheckingAuth />;
  }
  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<JournalRoute />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoute />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
      {/* login y registro */}
      {/* <Route path="/auth/*" element={<AuthRoute />} /> */}

      {/* JournalApp */}
      {/*<Route path="/*" element={<JournalRoute />} /> */}
    </Routes>
  );
};

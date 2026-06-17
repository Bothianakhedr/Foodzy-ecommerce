import type { RootState } from "@/admin-dashboard/app/store";
import { clearToken } from "@/admin-dashboard/features/account/login/redux/authSlice";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { token } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  return (
    <nav className="flex items-center w-full justify-between flex-row p-4 border-b">
      <h1 className="font-bold text-xl">Foodzy</h1>
      <div>
        {!token ? (
          <Button asChild className="w-20 cursor-pointer">
            <Link to="/login">Login</Link>
          </Button>
        ) : (
          <Button 
            variant="destructive" 
            onClick={() => dispatch(clearToken())}
            className="cursor-pointer"
          >
            Logout
          </Button>
        )}
      </div>
    </nav>
  );
}
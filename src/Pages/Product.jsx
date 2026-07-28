import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="flex justify-center gap-10 py-4">
        <Link className="text-xl font-semibold" to="/product/Men">
          Men Collections
        </Link>
        <Link className="text-xl font-semibold" to="/Product/Women">
          Women's collections
        </Link>
      </div>

      <Outlet />
    </div>
  );
};

export default Product;

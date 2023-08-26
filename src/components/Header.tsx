const Header = () => {
  return (
    <header>
      <div
        class={
          "z-50 w-full flex p-2 items-center justify-between bg-gray-800 fixed top-0	h-12  "
        }
      >
        <div class="w-4/5  flex items-center justify-between gap-3 ">
          <h1 class="p-0 text-white decoration-white">Hono</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;

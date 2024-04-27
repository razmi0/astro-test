const List = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className="px-6 ms-6 w-full text-lg grandstander flex flex-col justify-evenly border-transparent border-s-4 border-s-slate-300 dark:border-s-slate-700">
      {children}
    </ul>
  );
};

export default List;

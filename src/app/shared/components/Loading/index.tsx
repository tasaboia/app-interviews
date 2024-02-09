const LoadingFull = () => (
  <div className="fixed top-0 bottom-0 left-0 right-0 z-[100] flex items-center justify-center w-full h-full bg-black bg-opacity-50 backdrop-blur-lg">
    <p>Loading...</p>
  </div>
);

const Loading = () => <p>Loading</p>;

export default { Root: Loading, Full: LoadingFull };

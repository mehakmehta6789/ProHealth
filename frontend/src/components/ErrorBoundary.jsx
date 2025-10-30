const ErrorBoundary = () => {
  function Fallback({ error, resetErrorBoundary }) {
    return (
      <div
        role="alert"
        className="max-w-md mx-auto mt-10 p-6 border border-red-500 rounded-lg bg-red-50 shadow-lg text-center"
      >
        <p className="text-red-700 font-semibold text-lg mb-2">
          Something went wrong:
        </p>
        <pre className="text-red-600 mb-4">{error.message}</pre>
        <button
          onClick={resetErrorBoundary}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-all"
        >
          Try Again
        </button>
      </div>
    );
  }
};

export default ErrorBoundary;

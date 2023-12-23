export const Logo: React.FC = () => {
  return (
    <div
      onClick={() => {
        window.open("https://thirdweb.com?utm_source=embed", "_blank");
      }}
      className="spacing-1 absolute top-4 left-5 flex cursor-pointer items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="30"
        viewBox="0 0 26 13"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.057033 1.0938C-0.151373 0.568024 0.23702 0 0.805399 0H4.33409C4.66564 0 4.9593 0.197165 5.08245 0.502302L7.89119 7.50636C7.96698 7.69414 7.96698 7.90539 7.89119 8.09786L6.12448 12.4965C5.8545 13.1678 4.89773 13.1678 4.62775 12.4965L0.057033 1.0938ZM6.87312 1.07033C6.68366 0.549246 7.07205 0 7.63096 0H10.7049C11.046 0 11.3491 0.211249 11.4628 0.525774L14.0157 7.52984C14.0773 7.70353 14.0773 7.896 14.0157 8.07439L12.4811 12.2853C12.2254 12.9894 11.2212 12.9894 10.9654 12.2853L6.87312 1.07033ZM13.7743 0C13.2059 0 12.8175 0.568024 13.0259 1.0938L17.5966 12.4965C17.8666 13.1678 18.8233 13.1678 19.0933 12.4965L20.86 8.09786C20.9358 7.90539 20.9358 7.69414 20.86 7.50636L18.0513 0.502302C17.9282 0.197165 17.6345 0 17.3029 0H13.7743Z"
          fill="#2bd985"
        />
      </svg>
    </div>
  );
};
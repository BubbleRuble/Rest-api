import sadcat from './sadcat.jpg'

const ErrorView = ({message}) => {
  return (
    <div role="alert">
      <img
            src={sadcat}
            alt="sadcat"
            width="240"
          />
          {message}
    </div>
  )
};

export default ErrorView;
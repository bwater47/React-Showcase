// Import the styles from App.css.
import {NotFoundContainer, Title, Subtitle, Description, HomeButton } from '../App.css'
// Export the NotFound function for the app to display the 404 page when the user navigates to a page that does not exist.
export default function NotFound() {
  return (
    <NotFoundContainer>
      <Title>404</Title>
      <Subtitle>Page Not Found</Subtitle>
      <Description>Sorry, the page you are looking for does not exist.</Description>
      <HomeButton to="/">Go to Homepage</HomeButton>
    </NotFoundContainer>
  );
}
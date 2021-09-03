import { render, screen } from '@testing-library/react';
import App from './App';

test('columns', () => {
  render(<App />);
  const Author = screen.getByText('Author');
  expect(Author).toBeInTheDocument();

  const Date = screen.getByText('Date');
  expect(Date).toBeInTheDocument();

  const Post = screen.getByText('Post');
  expect(Post).toBeInTheDocument();

  const PostImage = screen.getByText('Post Image');
  expect(PostImage).toBeInTheDocument();

  const LikesCount = screen.getByText('Likes Count');
  expect(LikesCount).toBeInTheDocument();

  const CommentsCount = screen.getByText('Comments Count');
  expect(CommentsCount).toBeInTheDocument();

  const TotalEngagement = screen.getByText('Total Engagement');
  expect(TotalEngagement).toBeInTheDocument();
});

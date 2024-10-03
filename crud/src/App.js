import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Post from "./components/pages/Post/Post";
import PostEdit from "./components/pages/PostEdit/PostEdit";
import PostForm from "./components/pages/PostForm/PostForm";
import PageNotFound from "./components/pages/PageNotFound/PageNotFound";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Container>
      <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/post/:postId" element={<Post />} />
            <Route path="/post/add" element={<PostForm />} />
            <Route path="/post/edit/:id" element={<PostEdit />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
      <Footer />
    </Container>
  );
}

export default App;

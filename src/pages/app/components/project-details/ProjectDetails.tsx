import styles from './ProjectDetails.module.css'
import { MDXProvider } from '@mdx-js/react'
import Post from '../../../../assets/post.mdx'

interface Props {
  onCloseClick: () => void
}

// TODO: https://github.com/remarkjs/react-markdown
// https://mdxjs.com/packages/rollup/
// https://mdxjs.com/docs/using-mdx/#mdx-provider
// https://mdxjs.com/packages/react/
const ProjectDetails = ({ onCloseClick }: Props) => {
  return (
    <div className={styles.wrapper}>
      <button
        onClick={() => {
          onCloseClick()
        }}
      >
        ×
      </button>

      <div className={styles.content}>
        <MDXProvider>
          <Post />
        </MDXProvider>
      </div>
    </div>
  )
}
export default ProjectDetails

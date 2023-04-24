import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={400}
    height={600}
    viewBox="0 0 400 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="198" cy="163" r="160" />
    <rect x="44" y="332" rx="0" ry="0" width="308" height="37" />
    <rect x="4" y="384" rx="0" ry="0" width="397" height="85" />
    <rect x="11" y="487" rx="0" ry="0" width="140" height="46" />
    <rect x="191" y="485" rx="0" ry="0" width="211" height="50" />
  </ContentLoader>
)

export default Skeleton

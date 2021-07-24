const SupportMaterial = ({ speaking }) => {
  const video = speaking?.video?.url
  const slides = speaking?.slides?.url
  if (video && slides) {
    return (
      <span>
        <a href={video.url}>Video</a>
        &nbsp;&amp;&nbsp;
        <a href={slides.url}>Slides</a>
      </span>
    )
  }
  if (video) {
    return <a href={video.url}>Video</a>
  }
  if (slides) {
    return <a href={slides.url}>Slides</a>
  }
}

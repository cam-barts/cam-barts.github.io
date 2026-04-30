import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { pathToRoot } from "../util/path"
import style from "./styles/notbyai.scss"

export default (() => {
  const NotByAI: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    if (!fileData.frontmatter?.notbyai) {
      return null
    }

    const baseDir = pathToRoot(fileData.slug!)
    const imgPath = `${baseDir}/static/not_by_ai.png`

    return (
      <div class={`notbyai ${displayClass ?? ""}`}>
        <a href="https://notbyai.fyi" target="_blank" rel="noopener noreferrer">
          <img src={imgPath} alt="Not By AI" width="150" />
        </a>
      </div>
    )
  }

  NotByAI.css = style
  return NotByAI
}) satisfies QuartzComponentConstructor

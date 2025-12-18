import {
  NavigateItem,
  NavigateMenu,
} from "@/registry/default/displayui/NavigationMenuMac"

const PreviewNavigationMenuMacWithTooltip = () => {
  return (
    <>
      <div>
        <NavigateMenu className="">
          <NavigateItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            alt="Next"
            className="bg-purple-400/80 p-1 rounded-md"
            onClick={() => {
              alert("Next")
            }}
            tooltipContent="Next"
          />

          <NavigateItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            alt="React"
            className="bg-pink-400/80 p-1 rounded-md"
            onClick={() => {
              alert("React")
            }}
            tooltipContent="React"
          />

          <NavigateItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg"
            alt="Nest"
            className="bg-black/80 p-1 rounded-md"
            onClick={() => {
              alert("Nest")
            }}
            tooltipContent="Nest"
          />

          <NavigateItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxt/nuxt-original.svg"
            alt="Nuxt"
            className="bg-red-400/80 p-1 rounded-md"
            onClick={() => {
              alert("Nuxt")
            }}
            tooltipContent="Nuxt"
          />

          <NavigateItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kaggle/kaggle-original.svg"
            alt="Kaggle"
            className="bg-orange-400/80 p-1 rounded-md"
            onClick={() => {
              alert("Kaggle")
            }}
            tooltipContent="Kaggle"
          />

          <NavigateItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg"
            alt="Nuxt"
            className="bg-cyan-400/80 p-1 rounded-md"
            onClick={() => {
              alert("Nuxt")
            }}
            tooltipContent="Nuxt"
          />

          <NavigateItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg"
            alt="Axios"
            className="bg-red-400/80 p-1 rounded-md"
            onClick={() => {
              alert("Axios")
            }}
            tooltipContent="Axios"
          />

          <NavigateItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dyalog/dyalog-plain.svg"
            alt="Dyalog"
            className="bg-black/80 p-1 rounded-md"
            onClick={() => {
              alert("Dyalog")
            }}
            tooltipContent="Dyalog"
          />

          <NavigateItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"
            alt="Django"
            className="bg-yellow-400/80 p-1 rounded-md"
            onClick={() => {
              alert("Django")
            }}
            tooltipContent="Django"
          />

          <NavigateItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"
            alt="Fast-API"
            className="bg-purple-700/80 p-1 rounded-md"
            onClick={() => {
              alert("Fast-API")
            }}
            tooltipContent="Fast-API"
          />
        </NavigateMenu>
      </div>
    </>
  )
}

export default PreviewNavigationMenuMacWithTooltip

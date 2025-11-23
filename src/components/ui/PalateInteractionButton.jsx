
function PalateInteractionButton({children,onClick}) {
  return (
    <button
    onClick={onClick}
        color="black"
        className="
        hover:
          size-6
          cursor-pointer
          active:scale-75
          transition-transform duration-150
        "
    >{children}</button>
  )
}

export default PalateInteractionButton
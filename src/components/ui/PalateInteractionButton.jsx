
function PalateInteractionButton({children,onClick,...props}) {
  return (
    <button
    {...props}
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
import MainMachineContext from './MainMachineContext'

const defaultContainerStyle = {
  position: 'relative',
  width: '100%',
  height: '100%',
  minHeight: '200px',
  minWidth: '450px',
  margin: '0',
  padding: '0',
  top: '0',
  left: '0',
  overflow: 'hidden',
}

class ViewerMachineContext {
  constructor() {
    this.id =
      'itk-vtk-viewer-' +
      performance
        .now()
        .toString()
        .replace('.', '')

    this.main = new MainMachineContext()
  }

  // Contains the viewer container div and optionally the debugger
  rootContainer = null

  // Contains the viewer
  container = null

  // Unique identifier used to identify a viewer in the DOM when multiple are
  // on a page
  id = 'itk-vtk-viewer'

  // A 2D viewer versus a 3D viewer
  use2D = false

  // Style of the container for the viewer
  containerStyle = defaultContainerStyle

  // Main machine context
  main = null
}

export default ViewerMachineContext

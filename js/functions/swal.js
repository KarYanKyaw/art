import Swal from "sweetalert2";

export const swalToast = Swal.mixin({
    toast: true,
    position: 'top',
    iconColor: '#333',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 1500,
    // timerProgressBar: true
  })

export  const confirmModal = Swal.mixin({
  iconColor: '#333',
  customClass: {
    confirmButton: 'btn btn-primary',
    cancelButton: 'btn btn-secondary me-2'
  },
  buttonsStyling: false
})


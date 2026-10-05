const navbarBtnClick = () => {
    const navBarItems = document.getElementById("navbar-items-id");
    navBarItems.style.display === "flex"
        ? navBarItems.style.display = "none"
        : navBarItems.style.display = "flex"
}

const downloadModalStateDef = {
    open: false,
    selectedItemId: 'android-id'
};

const currentDownloadModalState = { ...downloadModalStateDef }

const changeModalImagesOnHover = (event) => {
    const imageElement = document.getElementById('modal-image'); 

    switch (event.target.id) {
        case 'download-app-modal-container-r-content-1-item-android-id':
            imageElement.src = './assets/images/mobile-app.jpg';
            break;
        case 'download-app-modal-container-r-content-1-item-ios-id':
            imageElement.src = './assets/images/clinic-admin.jpg'; 
            break;
        case 'download-app-modal-container-r-content-1-item-mac-os-id':
            imageElement.src = './assets/images/clinic.jpg'; 
        default:
            break;
    }
};

const resetModalImage = () => {
    const imageElement = document.getElementById('modal-image');
    imageElement.src = './assets/images/mobile-app.jpg'; 
};

(() => {
    const items = document.getElementsByClassName('download-app-modal-container-r-content-1-item');

    Array.from(items).forEach(item => {
        item.addEventListener('mouseover', changeModalImagesOnHover);
        item.addEventListener('mouseout', resetModalImage);
    });
})();
const openCloseDownloadModalState = () => {
    const modal = document.getElementById('download-app-modal-id');
    if (currentDownloadModalState.open) {
        const previousId = currentDownloadModalState.selectedItemId;
        currentDownloadModalState.selectedItemId = downloadModalStateDef.selectedItemId;
        changeDownloadModalItemStyles(currentDownloadModalState.selectedItemId, previousId);
        modal.classList.remove('opened')
        document.body.style.overflowY = 'auto';
    } else {
        modal.classList.add('opened')
        document.body.style.overflowY = 'hidden';
    }
    currentDownloadModalState.open = !currentDownloadModalState.open
}

const changeDownloadModalItemStyles = (newId, oldId) => {
    document.getElementById(`download-app-modal-container-r-content-1-item-${oldId}`)?.classList.remove('selected');
    document.getElementById(`download-app-modal-container-r-content-2-${oldId}`)?.classList.remove('selected');
    document.getElementById(`download-app-modal-container-r-content-1-item-${newId}`)?.classList.add('selected');
    document.getElementById(`download-app-modal-container-r-content-2-${newId}`)?.classList.add('selected');
}

const selectDownloadModalItem = (event) => {
    if (!event.target.id.contains('download-app-modal-container-r-content-1-item-android-id')) return
    if (event.target.classList.contains('selected')) return
    const newId = event.target.id.split('download-app-modal-container-r-content-1-item-').pop();
    changeDownloadModalItemStyles(newId, currentDownloadModalState.selectedItemId)
    currentDownloadModalState.selectedItemId = newId
}

(() => {
    document.getElementById('download-app-modal-container-r-content-1-item-android-id').onclick = function() {
        window.location.href = 'https://clinic.medisa.by/';
    };

    document.getElementById('download-app-modal-container-r-content-1-item-ios-id').onclick = function() {
        window.location.href = 'https://cabinet.medisa.by/';
    };

    
    document.getElementById('navbar-items-btn-id')?.addEventListener('click', navbarBtnClick);
    Array.from(document.getElementsByClassName('download-button') || []).forEach(element => {
        element.addEventListener('click', openCloseDownloadModalState)
    });
    document.getElementById('download-app-modal-container-close-id').addEventListener('click', openCloseDownloadModalState)
    Array.from(document.getElementsByClassName('download-app-modal-container-r-content-1-item') || []).forEach(element => {
        element.addEventListener('click', selectDownloadModalItem)
    });
})()
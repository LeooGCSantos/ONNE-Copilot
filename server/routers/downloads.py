from fastapi import APIRouter

router = APIRouter(tags=["downloads"])

DOWNLOADS = [
    {"nome": "AnyDesk", "url": "https://anydesk.com/pt/downloads/windows"},
    {"nome": "Google Chrome", "url": "https://www.google.com/chrome/"},
    {"nome": "Mozilla Firefox", "url": "https://www.mozilla.org/firefox/new/"},
    {"nome": "Adobe Acrobat Reader", "url": "https://get.adobe.com/br/reader/"},
    {"nome": "FortiClient VPN", "url": "https://www.fortinet.com/support/product-downloads"},
    {"nome": "CCleaner", "url": "https://www.ccleaner.com/ccleaner/download"},
    {"nome": "7-Zip", "url": "https://www.7-zip.org/download.html"},
    {"nome": "VLC Media Player", "url": "https://www.videolan.org/vlc/"},
]


@router.get("/downloads")
def list_downloads():
    return DOWNLOADS

(function () {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var eventDoc, doc, body;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
                (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
                (doc && doc.scrollTop || body && body.scrollTop || 0) -
                (doc && doc.clientTop || body && body.clientTop || 0);
        }

        // Use event.pageX / event.pageY here
        const
            pointerLocationEl = document.getElementById('pointerLocation'),
            primaryMenuEl = document.getElementById('spreadshieldCorePrimaryMenu'),
            spreadshieldCorePrimaryMenu = document.getElementById('spreadshieldCorePrimaryMenu'),
            secondaryMenuEl = document.getElementById('spreadshieldCoreSecondaryMenu'),
            pointerLocationData = pointerLocationEl.getBoundingClientRect(),
            primaryMenuData = primaryMenuEl.getBoundingClientRect(),
            secondaryMenuData = secondaryMenuEl.getBoundingClientRect(),
            pointerLocation = {
                w: pointerLocationData.width,
                h: pointerLocationData.width,
                c: pointerLocationEl.getAttribute('data-color')
            }


            const
                primaryMenuDetails = {
                    b: primaryMenuData.bottom,
                    t: primaryMenuData.top,
                    l: primaryMenuData.left,
                    r: primaryMenuData.right,
                    h: primaryMenuData.height,
                    w: primaryMenuData.width
                },
                primaryMenuHeight = `${primaryMenuDetails.h}px`,
                primaryMenuWidth = `${primaryMenuDetails.w}px`,
                primaryMenuBase = `${primaryMenuDetails.b}px`

        // console.log(`Height: ${primaryMenuHeight}, Width: ${primaryMenuWidth}, Base: ${primaryMenuBase}`)






            console.log(primaryMenuDetails)

            currentPointerX = event.pageX,
            currentPointerY = event.pageY,
            currentPointer = {
                x: currentPointerX,
                y: currentPointerY
            }

        const primaryMenuElHeight = primaryMenuDetails.b - primaryMenuDetails.h
        console.log(primaryMenuElHeight)

        const primaryMenuBefore = primaryMenuEl.querySelector("::before" )

        if (event.pageY >=  primaryMenuElHeight){
            console.log('hovering menu')
            spreadshieldCorePrimaryMenu.style.borderBottom = 'solid 5px transparent'
        } else {
            spreadshieldCorePrimaryMenu.style.borderBottom = 'solid 5px transparent'

        }

        pointerLocationEl.addEventListener('mousemove', e => {
            const pointerLocationDot = document.getElementById('pointerLocationDot')

            pointerLocationDot.style.backdropFilter = '0px'
            pointerLocationDot.style.width = '40px'
            pointerLocationDot.style.height = '40px'
            pointerLocationDot.style.border = 'solid 1px lightskyblue'
            pointerLocationDot.style.cursor = 'none'
            pointerLocationDot.style.boxShadow = 'inset 0 0 5px lightskyblue, inset 0 0 20px rgba(0, 0, 0, 0.2), 0 0 20px lightskyblue'
        })
        pointerLocationEl.addEventListener('click', e => {
            const pointerLocationDot = document.getElementById('pointerLocationDot')

            pointerLocationDot.style.backdropFilter = '0px'
            pointerLocationDot.style.border = 'solid 1px #fff'
            pointerLocationDot.style.cursor = 'none'
            pointerLocationDot.style.scale = '1.1'
            pointerLocationDot.style.boxShadow = 'inset 0 0 5px lightskyblue, inset 0 0 20px rgba(0, 0, 0, 0.2), 0 0 20px #fff'
            const endEventTimer = setTimeout(endClickAnim, 200)
            function endClickAnim() {
                pointerLocationDot.style.boxShadow = 'inset 0 0 5px lightskyblue, inset 0 0 20px rgba(0, 0, 0, 0.2), 0 0 20px lightskyblue'
                pointerLocationDot.style.border = 'solid 1px lightskyblue'
                pointerLocationDot.style.scale = '1'
            }
        })
        pointerLocationEl.addEventListener('dblclick', e => {
            const pointerLocationDot = document.getElementById('pointerLocationDot')

            console.log('DBLCLICK')
            pointerLocationDot.style.backdropFilter = '0px'
            pointerLocationDot.style.width = '1px'
            pointerLocationDot.style.height = '1px'
            pointerLocationDot.style.background = 'transparent'
            pointerLocationDot.style.border = 'solid 1px transparent'
            pointerLocationDot.style.boxShadow = 'inset 0 0 10px transparent, inset 0 0 30px transparent, inset 0 0 40px transparent'
        })



        // console.log(pointerLocation)


        // console.log('currentPointer: ', currentPointer)
        // console.log('currentPointer.x: ', currentPointer.x)
        // console.log('currentPointer.y: ', currentPointer.y)

        pointerLocationEl.style.left = `${currentPointer.x}px`
        pointerLocationEl.style.top = `${currentPointer.y}px`

        

    }
})();
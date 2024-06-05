let reportPDF; // Define reportPDF globalmente

// Lista de productos con sus unidades y categorías
const products = [
    // Carnes
    { name: "Salami Ahumado", unit: "LIBRA", category: "Carnes" },
    { name: "Jamón Tipo Pizza Granel", unit: "LIBRA", category: "Carnes" },
    { name: "Pepperoni", unit: "LIBRA", category: "Carnes" },
    { name: "Tocino Rebanado Ahumado", unit: "LIBRA", category: "Carnes" },
    { name: "Jamón Roast 1.25 lb", unit: "LIBRAS", category: "Carnes" },
    { name: "Jamón", unit: "LIBRAS", category: "Carnes" },
    { name: "Carne de Res", unit: "LIBRA", category: "Carnes" },
    { name: "Carne Roast", unit: "BOLSAS", category: "Carnes" },
    
    // Quesos
    { name: "Pizza Cheese Rallado 20 lbs", unit: "LIBRA", category: "Quesos" },
    { name: "Pizza Cheese Block 5 lbs", unit: "LIBRA", category: "Quesos" },
    { name: "Queso Parmesano 2.4 lb", unit: "LIBRAS", category: "Quesos" },
    { name: "Queso Lac Procesado 3 lb", unit: "LIBRAS", category: "Quesos" },
    { name: "Queso Mozzarella 2 lb", unit: "LIBRAS", category: "Quesos" },
    { name: "Queso Mex", unit: "LIBRAS", category: "Quesos" },
    { name: "Queso Cheddar 3 lb", unit: "LIBRAS", category: "Quesos" },
    { name: "Queso Mozarella", unit: "LIBRAS", category: "Quesos" },
    { name: "Queso Blok", unit: "LIBRAS", category: "Quesos" },
    { name: "Mezcla de 5 Quesos", unit: "BOLSAS", category: "Quesos" },

    // Vegetales y Frutas
    { name: "Papas Valley", unit: "BOLSA", category: "Vegetales y Frutas" },
    { name: "Cebolla Blanca", unit: "LIBRA", category: "Vegetales y Frutas" },
    { name: "Cebolla Morada", unit: "LIBRA", category: "Vegetales y Frutas" },
    { name: "Arándanos Bolsa 1.36 kg / 48 oz", unit: "UNIDAD", category: "Vegetales y Frutas" },
    { name: "Arúgula Bolsa 227 g / 8 oz", unit: "UNIDAD", category: "Vegetales y Frutas" },
    { name: "Aguacate Express 2 Unidades 1 lb", unit: "UNIDAD", category: "Vegetales y Frutas" },
    { name: "Lechuga Romana Bolsa 227 g / 8 oz", unit: "BOLSA", category: "Vegetales y Frutas" },
    { name: "Tomate Cherry 567 g / 1.25 lb", unit: "LIBRAS", category: "Vegetales y Frutas" },
    { name: "Fresas Bolsa 5 lb", unit: "LIBRA", category: "Vegetales y Frutas" },

    { name: "Chile Jalapeño", unit: "LIBRA", category: "Vegetales y Frutas" },
    { name: "Chile Pimiento Verde", unit: "UNIDAD", category: "Vegetales y Frutas" },
    { name: "Chile Pimiento Rojo", unit: "UNIDAD", category: "Vegetales y Frutas" },
    { name: "Champiñones", unit: "UNIDAD", category: "Vegetales y Frutas" },
    { name: "Piña", unit: "UNIDAD", category: "Vegetales y Frutas" },
    { name: "Limón", unit: "LIBRA", category: "Vegetales y Frutas" },
    { name: "Pitahaya", unit: "BOLSAS", category: "Vegetales y Frutas" },

    // Salsas y Condimentos
    { name: "Salsa Chicharronera", unit: "BOLSA", category: "Salsas y Condimentos" },
    { name: "Salsa para Finger", unit: "BOLSA", category: "Salsas y Condimentos" },
    { name: "Pasta de Tomate", unit: "UNIDAD", category: "Salsas y Condimentos" },
    { name: "Salsa para Pizza", unit: "UNIDAD", category: "Salsas y Condimentos" },
    { name: "Toping de Res", unit: "LIBRA", category: "Salsas y Condimentos" },
    { name: "Azúcar", unit: "LIBRA", category: "Salsas y Condimentos" },
    { name: "Sazonador 793.8 gramos", unit: "UNIDAD", category: "Salsas y Condimentos" },
    { name: "Ketchup", unit: "BOTE", category: "Salsas y Condimentos" },
    { name: "Salsa LA 907 g", unit: "UNIDAD", category: "Salsas y Condimentos" },
    { name: "Polvo Rojo", unit: "BOLSA", category: "Salsas y Condimentos" },
    { name: "Canela", unit: "BOTE", category: "Salsas y Condimentos" },
    { name: "Pimienta sobre BOPP transparente", unit: "0.5 GRAMOS", category: "Salsas y Condimentos" },
    { name: "Chile sobre BOPP transparente", unit: "0.5 GRAMOS", category: "Salsas y Condimentos" },
    { name: "Aderezo Ranch 3.78 L / 128 oz", unit: "BOTE", category: "Salsas y Condimentos" },
    { name: "Mostaza", unit: "BOTE", category: "Salsas y Condimentos" },
    { name: "Sal", unit: "LIBRA", category: "Salsas y Condimentos" },
    { name: "Mayonesa Unidad 200 g", unit: "BOTE", category: "Salsas y Condimentos" },
    { name: "Chimichurri", unit: "BOLSAS", category: "Salsas y Condimentos" },

    // Panadería y Harina
    { name: "Harina Trigo Saco 50 lbs", unit: "SACO 50 LIBRAS", category: "Harina" },

    // Productos de Limpieza
    { name: "Limpia Vidrios", unit: "UNIDAD", category: "Productos de Limpieza" },
    { name: "Detergente", unit: "UNIDAD", category: "Productos de Limpieza" },
    { name: "Desinfectante", unit: "UNIDAD", category: "Productos de Limpieza" },
    { name: "Jabón Líquido", unit: "GALÓN", category: "Productos de Limpieza" },
    { name: "Jabón para Platos 2.66 L / 90 oz", unit: "UNIDAD", category: "Productos de Limpieza" },
    { name: "Pastilla para Baño", unit: "UNIDAD", category: "Productos de Limpieza" },
    { name: "Aromatizante", unit: "UNIDAD", category: "Productos de Limpieza" },
    { name: "Bolsas de Basura 55 Gall", unit: "PAQUETE", category: "Productos de Limpieza" },
    { name: "Bolsas de Basura 11 Gall", unit: "PAQUETE", category: "Productos de Limpieza" },
    { name: "Papel de Baño", unit: "UNIDAD", category: "Productos de Limpieza" },
    { name: "Raid", unit: "UNIDAD", category: "Productos de Limpieza" },
    { name: "Scotch Esponja", unit: "UNIDAD", category: "Productos de Limpieza" },
    { name: "Esponja de Alambre", unit: "UNIDAD", category: "Productos de Limpieza" },
    { name: "Jabón de Bola", unit: "UNIDAD", category: "Productos de Limpieza" },
    { name: "Cloro Galón", unit: "GALÓN", category: "Productos de Limpieza" },
    { name: "Toalla de Manos", unit: "UNIDAD", category: "Productos de Limpieza" },
    { name: "Alcohol Líquido", unit: "GALÓN", category: "Productos de Limpieza" },
    { name: "Trapeadores", unit: "UNIDAD", category: "Productos de Limpieza" },
    { name: "Toallas para Limpiar Mesas", unit: "UNIDAD", category: "Productos de Limpieza" },
    { name: "Escobas", unit: "UNIDAD", category: "Productos de Limpieza" },

    // Otros
    { name: "Garrafón de Agua", unit: "UNIDAD", category: "Otros" },
    { name: "Aceite", unit: "CANECAS", category: "Otros" },
    { name: "Asistin", unit: "GALONES", category: "Otros" },
    { name: "Vasos Caja 200 Unidades 236 ml / 8 oz", unit: "CAJA", category: "Otros" },
    { name: "Vasos Desechables", unit: "PAQUETES", category: "Otros" },
    { name: "Toalla de Papel Paquete 3 Unidades / 170 m", unit: "PAQUETE", category: "Otros" },
    { name: "Papel para Manos", unit: "PAQUETES", category: "Otros" },
    { name: "Bolsa Basura Caja 50 Unidades 208 L", unit: "CAJA", category: "Otros" },
    { name: "Bolsas para Basura (33 galones)", unit: "CAJAS", category: "Otros" },
    { name: "Bolsas para Basura Extra Grande", unit: "ROLLOS", category: "Otros" },
    { name: "Bolsas para Basura Medianas", unit: "ROLLOS", category: "Otros" },
    { name: "Caja Fingers", unit: "CAJA 50 UNIDADES", category: "Otros" },
    { name: "Caja Pizza", unit: "CAJA 50 UNIDADES", category: "Otros" },
    { name: "Servilletas", unit: "PAQUETES", category: "Otros" },
    { name: "Cuaderno", unit: "UNIDAD", category: "Otros" },
    { name: "Lapiceros", unit: "UNIDAD", category: "Otros" },
    { name: "Marcadores", unit: "UNIDAD", category: "Otros" },
    { name: "post-it", unit: "PAQUETE", category: "Otros" }
];


window.onload = function() {
    const productForm = document.getElementById('product-form');
    const categories = {};

    // Agrupar productos por categoría
    products.forEach((product, index) => {
        if (!categories[product.category]) {
            categories[product.category] = [];
        }
        categories[product.category].push({ ...product, id: index + 1 });
    });

    // Crear secciones por cada categoría
    let globalIndex = 0;
    for (const category in categories) {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';

        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category;
        categoryDiv.appendChild(categoryTitle);

        categories[category].forEach((product) => {
            globalIndex++;
            const productDiv = document.createElement('div');
            productDiv.className = 'product';

            const productTitle = document.createElement('h3');
            productTitle.textContent = product.name;
            productDiv.appendChild(productTitle);

            const inputContainer = document.createElement('div');
            inputContainer.className = 'input-container';

            // Etiqueta y campo para la presentación del producto
            const presentationDiv = document.createElement('div');
            const labelPresentation = document.createElement('label');
            labelPresentation.setAttribute('for', `presentation${globalIndex}`);
            labelPresentation.textContent = 'Presentación:';
            presentationDiv.appendChild(labelPresentation);

            const inputPresentation = document.createElement('input');
            inputPresentation.type = 'text';
            inputPresentation.id = `presentation${globalIndex}`;
            inputPresentation.value = product.unit;
            inputPresentation.readOnly = true;
            presentationDiv.appendChild(inputPresentation);

            inputContainer.appendChild(presentationDiv);

            // Etiqueta y campo para la cantidad utilizada
            const quantityDiv = document.createElement('div');
            const labelQuantity = document.createElement('label');
            labelQuantity.setAttribute('for', `quantity${globalIndex}`);
            labelQuantity.textContent = 'Cantidad utilizada:';
            quantityDiv.appendChild(labelQuantity);

            const inputQuantity = document.createElement('input');
            inputQuantity.type = 'number';
            inputQuantity.id = `quantity${globalIndex}`;
            quantityDiv.appendChild(inputQuantity);

            inputContainer.appendChild(quantityDiv);

            productDiv.appendChild(inputContainer);

            // Contenedor para el checkbox de "no utilizado"
            const checkboxContainer = document.createElement('div');
            checkboxContainer.className = 'checkbox-container';

            const inputNotUsed = document.createElement('input');
            inputNotUsed.type = 'checkbox';
            inputNotUsed.id = `not-used${globalIndex}`;
            inputNotUsed.setAttribute('onchange', `toggleProductFields(${globalIndex})`);
            checkboxContainer.appendChild(inputNotUsed);

            const labelNotUsed = document.createElement('label');
            labelNotUsed.setAttribute('for', `not-used${globalIndex}`);
            labelNotUsed.textContent = 'Seleccione si no pedira este producto';
            checkboxContainer.appendChild(labelNotUsed);

            productDiv.appendChild(checkboxContainer);

            categoryDiv.appendChild(productDiv);
        });

        productForm.appendChild(categoryDiv);
    }
};

// Función para habilitar/deshabilitar campos según el estado del checkbox
function toggleProductFields(productNumber) {
    const notUsedCheckbox = document.getElementById(`not-used${productNumber}`);
    const presentationField = document.getElementById(`presentation${productNumber}`);
    const quantityField = document.getElementById(`quantity${productNumber}`);
    const fieldsDisabled = notUsedCheckbox.checked;

    if (fieldsDisabled) {
        presentationField.disabled = true;
        quantityField.disabled = true;
    } else {
        presentationField.disabled = false;
        quantityField.disabled = false;
    }

    presentationField.classList.remove('error');
    quantityField.classList.remove('error');
}

// Función para generar el reporte en PDF
function generateReport() {
    const { jsPDF } = window.jspdf;

    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';

    const doc = new jsPDF();

    // Obtener la sucursal seleccionada
    const branch = document.getElementById('branch-select').value;
    doc.setFontSize(16);
    doc.text(`Reporte Semanal de Productos Consumidos Pizzería - ${branch}`, 10, 10);
    doc.setFontSize(12);

    // Encabezados de la tabla
    let tableData = [
        ["Producto", "Presentación", "Cantidad utilizada", "Categoría"]
    ];

    let isValid = true;
    let firstInvalidElement = null;

    // Recorrer los productos y agregar filas a la tabla
    let globalIndex = 0;
    products.forEach((product) => {
        globalIndex++;
        const presentation = document.getElementById(`presentation${globalIndex}`);
        const quantity = document.getElementById(`quantity${globalIndex}`);
        const notUsed = document.getElementById(`not-used${globalIndex}`).checked;

        // Validar que los campos no estén vacíos si el producto se utiliza
        if (!notUsed && !presentation.value.trim()) {
            presentation.classList.add('error');
            isValid = false;
            if (!firstInvalidElement) firstInvalidElement = presentation;
        } else {
            presentation.classList.remove('error');
        }

        if (!notUsed && !quantity.value.trim()) {
            quantity.classList.add('error');
            isValid = false;
            if (!firstInvalidElement) firstInvalidElement = quantity;
        } else {
            quantity.classList.remove('error');
        }

        // Agregar datos a la tabla
        tableData.push([product.name, notUsed ? "Este producto no se utiliza" : presentation.value, notUsed ? "-" : quantity.value, product.category]);
    });

    // Mostrar mensaje de error si hay campos vacíos y enfocar el primer campo inválido
    if (!isValid) {
        errorMessage.textContent = "Por favor, completa todos los campos requeridos.";
        if (firstInvalidElement) {
            firstInvalidElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }

    // Generar la tabla en el PDF
    doc.autoTable({
        head: [tableData[0]],
        body: tableData.slice(1),
        styles: {
            fontSize: 11,
            cellPadding: 3,
            halign: 'center',
            valign: 'middle'
        },
        headStyles: {
            fillColor: [240, 240, 240],
            textColor: 0,
            fontStyle: 'bold'
        },
        alternateRowStyles: {
            fillColor: [245, 245, 245]
        }
    });

    reportPDF = doc;
}

// Función para descargar el reporte en PDF
function downloadReport() {
    if (!reportPDF) {
        generateReport();
    }
    reportPDF.save("reporte_productos.pdf");
}

// Función para compartir el reporte en PDF
function shareReport() {
    if (!reportPDF) {
        generateReport();
    }
    const pdfOutput = reportPDF.output('blob');
    const file = new File([pdfOutput], "reporte_productos.pdf", {
        type: "application/pdf"
    });

    // Verificar si el navegador soporta la función de compartir archivos
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
        navigator.share({
            title: 'Reporte de Productos',
            files: [file]
        }).catch(error => console.error('Error al compartir:', error));
    } else {
        alert("La función de compartir no es compatible con su navegador.");
    }
}

# 🎯 Cronograma Académico - Cuenta Regresiva

Una aplicación web moderna y elegante para hacer seguimiento de fechas importantes del período académico 2025-2026.

## ✨ Características

### 🎨 Diseño Visual Mejorado
- **Fondo animado**: Gradiente dinámico con partículas flotantes
- **Efectos glassmorphism**: Contenedores con efecto de cristal esmerilado
- **Animaciones suaves**: Transiciones y hover effects
- **Diseño responsivo**: Adaptable a dispositivos móviles y desktop
- **Tipografía moderna**: Fuente Orbitron para contadores y Roboto para texto

### ⚡ Funcionalidades
- **Múltiples contadores**: Seguimiento de 6 fechas importantes
- **Indicadores de prioridad**: Códigos de color según urgencia
- **Hitos importantes**: Fechas clave previas a la entrega principal
- **Sistema de notificaciones**: Alertas del navegador para fechas urgentes
- **Actualización en tiempo real**: Contadores actualizados cada segundo
- **Efectos de urgencia**: Animaciones especiales para fechas próximas

### 🎯 Fechas Monitoreadas
1. **Fin de Año 2025** - 31 de Diciembre, 2025
2. **Primera Entrega** - 16 de Noviembre, 2025
3. **Segunda Entrega** - 15 de Diciembre, 2025
4. **Entrega Final** - 10 de Febrero, 2026
5. **Entrega Definitiva** - 6 de Abril, 2026
6. **Fecha Principal** - 28 de Abril, 2026

### 🎨 Mejoras Visuales Implementadas

#### Colores y Efectos
- Fondo con gradiente animado que cambia constantemente
- Partículas flotantes para ambiente dinámico
- Efectos de hover con transformaciones 3D
- Sistema de colores basado en prioridad:
  - 🔴 **Alta**: Rojo para fechas críticas
  - 🟠 **Media**: Naranja para entregas importantes
  - 🟢 **Baja**: Cyan para fechas menos urgentes

#### Animaciones
- Gradiente de texto animado en el título principal
- Efecto de pulso en contadores urgentes
- Animación de celebración cuando se alcanza una fecha
- Transiciones suaves en hover states
- Efecto de barrido de luz en contenedores

#### Responsividad
- Grid layout que se adapta automáticamente
- Tipografías escalables según dispositivo
- Optimizado para móviles, tablets y desktop
- Navegación accesible por teclado

## 🚀 Tecnologías Utilizadas

- **HTML5**: Estructura semántica moderna
- **CSS3**: Animaciones, gradientes, y efectos avanzados
- **JavaScript ES6+**: Lógica moderna y modular
- **Bootstrap 5**: Sistema de grillas y componentes
- **Font Awesome**: Iconografía vectorial
- **Google Fonts**: Tipografías Orbitron y Roboto

## 📱 Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Dispositivos móviles iOS/Android

## 🛠 Instalación y Uso

1. **Clona o descarga** los archivos del proyecto
2. **Abre** `index.html` en tu navegador web
3. **Permite notificaciones** cuando se solicite (opcional)
4. **¡Disfruta** del seguimiento visual de tus fechas importantes!

## ⚙ Configuración

El archivo `main.js` incluye un objeto de configuración que puedes personalizar:

```javascript
const CONFIG = {
    updateInterval: 1000, // Intervalo de actualización en ms
    notifications: {
        enabled: true,        // Activar notificaciones
        urgentDays: 7,       // Días para considerar urgente
        warningDays: 30      // Días para considerar advertencia
    }
};
```

## 🎯 Próximas Mejoras

- [ ] Modo oscuro/claro
- [ ] Sonidos de notificación
- [ ] Exportar fechas a calendario
- [ ] Histórico de fechas completadas
- [ ] Personalización de colores
- [ ] Widget para escritorio

## 📝 Licencia

Este proyecto es de uso libre para fines educativos.

---

*Desarrollado con ❤️ para ayudarte a mantener el control de tus fechas académicas importantes.*
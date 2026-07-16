/**Создание компонента ToggleText
Используйте хуки `useRef` и `useState` для управления состояниями компонента.
Определите переменные с использованием useRef и useState:
Создайте переменные для хранения ссылки на элемент текста, отслеживания состояния видимости и управления длительностью анимации.
Создайте функцию для переключения видимости текста:
Определите функцию, которая будет изменять стили элемента текста для управления его видимостью и анимацией.
Создайте функцию для изменения длительности анимации:
Определите функцию, которая будет обновлять состояние длительности анимации при изменении значения в текстовом поле.
Возвращайте JSX из компонента:
Внутри компонента `ToggleText` создайте кнопку для переключения видимости текста, текстовое поле для ввода длительности анимации и блок текста, на который будет ссылаться `useRef`.
Реализация стилей и анимации
Добавьте стили в `ToggleText.css`:
Определите стили для блока текста, чтобы задать максимальную высоту, скрытие переполнения и переход для анимации.
Интеграция компонента ToggleText в основное приложение
Импортируйте компонент в `App.js`:
Откройте файл `App.js` в папке `src`.
Импортируйте компонент `ToggleText` из файла `ToggleText.js`.
Используйте компонент ToggleText в `App.js`:
Внутри функции компонента `App` добавьте компонент `ToggleText`, чтобы он отображался на странице.
Запуск и тестирование приложения
Запустите приложение
Проверьте функциональность:
Убедитесь, что текст скрывается и отображается при нажатии на кнопку.
Измените значение в текстовом поле и проверьте, что длительность анимации изменяется соответственно.
 */

import { useRef, useState, useEffect } from "react";
const shortStyle = { margin: "5px 10px", fontFamily: "Arial"};

function ToggleText() {

    const textRef = useRef(null);

    const [isVisible, setIsVisible] = useState(true);
    const [duration, setDuration] = useState("");

    const handleChange = (e) => {

        if (/^\d*\.?\d*$/.test(e.target.value)) {
            setDuration(e.target.value);
        }
    };

    useEffect(() => {
        const seconds = Number(duration) || 0;

        textRef.current.style.transition = `opacity ${seconds}s ease`;
        textRef.current.style.opacity = isVisible ? "1" : "0";
    }, [isVisible, duration]);

    return (
        <div style={{margin: "10px 25%", backgroundColor: "aliceblue", padding: "10px"}}>
            <h1 style={shortStyle}>Скрытие и отображение текста с анимацией</h1>

            <button onClick={() => setIsVisible(!isVisible)} style={shortStyle}>
                {isVisible ? "Скрыть текст" : "Показать текст"}
            </button>

            <input
                type="text"
                value={duration}
                onChange={handleChange}
                style={shortStyle}
            />

            <p ref={textRef} style={{ opacity: 1, }} style={shortStyle}>
                Это скрываемый текст. Нажмите кнопку, чтобы скрыть или показать его.
            </p>
        </div>
    );
}

export default ToggleText;
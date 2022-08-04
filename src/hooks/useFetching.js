import {useState, useTransition} from "react";

//Функция для прогона через нее запросов, отлавливает ошибки и устанавливает статус загрузки (загружется или нет), есть соответсвующий флаг

export const useFetching = (callback) => {

    const [isLoading, setIsLoading] = useState(false),
          [error, setError] = useState("");                   //state для ошибки и состояния запроса

    const fetching = async (...args) => {                               //функция, которую нужно вызвать, чтобы обработать callback
        try{
            setIsLoading(true);                                   //устанавливаем isLoading
            callback()                                                  //вызов callback
        } catch (e){
            setError(e.message);                                        //отлавливаем ошибку и устанавливаем сообщение в state
        } finally {
            setIsLoading(false);                                  //обновляем статус загрузки
        }
    }

    return [fetching, isLoading, error];
}
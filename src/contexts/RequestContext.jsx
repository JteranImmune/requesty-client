import React, {createContext, useState, useEffect, useCallback  } from "react";
import { REQUEST_DETAILS_MOCK } from "../consts";
import requestService from "../services/request.service";
import { useParams } from "react-router-dom";

export const RequestContext =  createContext();

export const RequestProvider = ({children}) =>{

    const [request, setRequest] = useState(REQUEST_DETAILS_MOCK);

    const getSingleRequest = async (id) => {
        try {
            const SingleRequest = await requestService.getOneRequest(id);
            setRequest(SingleRequest);
        } catch (error) {
            console.error(error);
        }
    };


    return <RequestContext.Provider value={{ request, getSingleRequest }}>{children}</RequestContext.Provider>

}

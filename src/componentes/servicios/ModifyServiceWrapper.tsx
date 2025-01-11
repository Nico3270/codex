"use client";

import { Service } from "@/interfaces/interfaces";
import { useState } from "react";
import { ModifyService } from "./ModifyService";


interface ModifyServiceWrapperProps {
  service: Service;
}

export default function ModifyServiceWrapper({ service }: ModifyServiceWrapperProps) {
  const [currentService, setCurrentService] = useState(service);

  const handleUpdateService = (updatedService: Service) => {
    console.log("Servicio actualizado:", updatedService);
    setCurrentService(updatedService);  // Actualiza el estado
  };

  return <ModifyService service={currentService} onUpdateService={handleUpdateService} />;
}

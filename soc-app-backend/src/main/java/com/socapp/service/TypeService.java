package com.socapp.service;

import com.socapp.model.Type;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class TypeService {

    public List<Type> getTypes() {
        return Arrays.asList(Type.values());
    }

    public String getTypeDescription(Type type) {
        return typeDescriptionMap.get(type);
    }

    private static final Map<Type, String> typeDescriptionMap = createMap();

    private static Map<Type, String> createMap() {
        Map<Type, String> map = new HashMap<>();

        map.put(Type.ENTP, "don");
        map.put(Type.ISFP, "dum");
        map.put(Type.ESFJ, "gug");
        map.put(Type.INTJ, "rob");

        map.put(Type.ISTJ, "max");
        map.put(Type.ENFJ, "gam");
        map.put(Type.ESTP, "juk");
        map.put(Type.INFP, "es");

        map.put(Type.ESFP, "nap");
        map.put(Type.INTP, "bal");
        map.put(Type.ISFJ, "drai");
        map.put(Type.ENTJ, "djek");

        map.put(Type.INFJ, "dost");
        map.put(Type.ESTJ, "shtir");
        map.put(Type.ENFP, "gek");
        map.put(Type.ISTP, "gab");

        return map;
    }
}

package ru.sgm.portal.Model;

// Класс, отвечающий за подложки для планеты
public class BaseLayer {
    private String name;
    private String path;

    public BaseLayer(String name, String path) {
        this.name = name;
        this.path = path;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }
}

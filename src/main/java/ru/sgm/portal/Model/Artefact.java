package ru.sgm.portal.Model;

// Класс отвечает за описание геологических артефактов
public class Artefact {
    private String name;
    private String description;
    private int yearFound;
    private int ageId;
    private int layerId;
    private int speciesId;
    private String extLink;

    public Artefact(String name, String description, int yearFound, int ageId, int layerId, int speciesId, String extLink) {
        this.name = name;
        this.description = description;
        this.yearFound = yearFound;
        this.ageId = ageId;
        this.layerId = layerId;
        this.speciesId = speciesId;
        this.extLink = extLink;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getYearFound() {
        return yearFound;
    }

    public void setYearFound(int yearFound) {
        this.yearFound = yearFound;
    }

    public int getAgeId() {
        return ageId;
    }

    public void setAgeId(int ageId) {
        this.ageId = ageId;
    }

    public int getLayerId() {
        return layerId;
    }

    public void setLayerId(int layerId) {
        this.layerId = layerId;
    }

    public int getSpeciesId() {
        return speciesId;
    }

    public void setSpeciesId(int speciesId) {
        this.speciesId = speciesId;
    }

    public String getExtLink() {
        return extLink;
    }

    public void setExtLink(String extLink) {
        this.extLink = extLink;
    }
}

FROM jboss/keycloak

# Copy realm configuration file into the container
COPY keycloak-config/realm-config.json /tmp/realm-config.json

# Import realm configuration during container startup
RUN /opt/jboss/keycloak/bin/standalone.sh -Dkeycloak.migration.action=import \
    -Dkeycloak.migration.provider=singleFile -Dkeycloak.migration.file=/tmp/realm-config.json \
    -Dkeycloak.migration.strategy=OVERWRITE_EXISTING

# Expose Keycloak port
EXPOSE 8080

# Command to run Keycloak
CMD ["-b", "0.0.0.0"]

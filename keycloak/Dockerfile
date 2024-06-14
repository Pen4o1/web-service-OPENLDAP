FROM jboss/keycloak


COPY keycloak-config/realm-config.json /tmp/realm-config.json
RUN /opt/jboss/keycloak/bin/standalone.sh -Dkeycloak.migration.action=import \
    -Dkeycloak.migration.provider=singleFile -Dkeycloak.migration.file=/tmp/realm-config.json \
    -Dkeycloak.migration.strategy=OVERWRITE_EXISTING

EXPOSE 8080

CMD ["-b", "0.0.0.0"]

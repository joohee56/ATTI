package com.ssafy.db.entity.depart;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QDepartTagList is a Querydsl query type for DepartTagList
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QDepartTagList extends EntityPathBase<DepartTagList> {

    private static final long serialVersionUID = 1281607372L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QDepartTagList departTagList = new QDepartTagList("departTagList");

    public final QDepart depart;

    public final QDepartTag departTag;

    public final NumberPath<Long> departTagListId = createNumber("departTagListId", Long.class);

    public QDepartTagList(String variable) {
        this(DepartTagList.class, forVariable(variable), INITS);
    }

    public QDepartTagList(Path<? extends DepartTagList> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QDepartTagList(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QDepartTagList(PathMetadata metadata, PathInits inits) {
        this(DepartTagList.class, metadata, inits);
    }

    public QDepartTagList(Class<? extends DepartTagList> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.depart = inits.isInitialized("depart") ? new QDepart(forProperty("depart"), inits.get("depart")) : null;
        this.departTag = inits.isInitialized("departTag") ? new QDepartTag(forProperty("departTag")) : null;
    }

}


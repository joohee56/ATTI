package com.ssafy.db.entity.depart;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QDepartTag is a Querydsl query type for DepartTag
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QDepartTag extends EntityPathBase<DepartTag> {

    private static final long serialVersionUID = 1351538958L;

    public static final QDepartTag departTag = new QDepartTag("departTag");

    public final NumberPath<Long> departTagId = createNumber("departTagId", Long.class);

    public final ListPath<DepartTagList, QDepartTagList> departTagLists = this.<DepartTagList, QDepartTagList>createList("departTagLists", DepartTagList.class, QDepartTagList.class, PathInits.DIRECT2);

    public final StringPath departTagName = createString("departTagName");

    public QDepartTag(String variable) {
        super(DepartTag.class, forVariable(variable));
    }

    public QDepartTag(Path<? extends DepartTag> path) {
        super(path.getType(), path.getMetadata());
    }

    public QDepartTag(PathMetadata metadata) {
        super(DepartTag.class, metadata);
    }

}

